import type {
  DialogApiInjection,
  LoadingBarInst,
  MessageApiInjection,
  NotificationApiInjection
} from 'naive-ui'

declare global {
  interface Window {
    $dialog: DialogApiInjection
    $loadingBar: LoadingBarInst
    $message: MessageApiInjection
    $notification: NotificationApiInjection
  }
}
