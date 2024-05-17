import type { Action } from '@/components/data-table/types'
import { usePermissionStore } from '@/stores/permission'

export function checkPermission(code: string): boolean {
  const storeCodes = usePermissionStore().permissionCodes!
  if (storeCodes.includes(code)) {
    return true
  }

  for (const pattern of storeCodes) {
    // 不包含通配符
    if (!pattern.includes('*')) {
      if (pattern === code) {
        return true
      }
      continue
    }
    // 动态规划模糊匹配
    const m = code.length
    const n = pattern.length
    const dp: boolean[][] = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false))
    dp[0][0] = true

    // 星号匹配任意长度
    for (let i = 1; i <= n && pattern.charAt(i - 1) === '*'; i++) {
      dp[0][i] = true
    }

    // 动态规划填充矩阵
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; ++j) {
        if (pattern.charAt(j - 1) !== '*') {
          // 当前字符相等时转移
          if (code.charAt(i - 1) === pattern.charAt(j - 1)) {
            dp[i][j] = dp[i - 1][j - 1]
          } else {
            dp[i][j] = false
          }
        } else {
          // 星号匹配任意字符，所以可以选择匹配或不匹配
          dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
        }
      }
    }
    if (dp[m][n]) {
      return true
    }
  }
  return false
}

export function isActionAuthorized(action: Action, row?: DataWithId) {
  let codes = action.permission
  if (codes === null) {
    return true
  }
  if (typeof codes === 'string') {
    codes = [codes]
  }
  let isAuthorized = !codes.some((code) => !checkPermission(code))
  const permissionFunc = action.permissionFunc
  if (!isAuthorized && permissionFunc && row) {
    isAuthorized = permissionFunc(row)
  }
  return isAuthorized
}
