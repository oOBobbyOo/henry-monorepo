export { }

declare global {
  export interface Window {
    /** antd message instance */
    $message?: import('antd/es/message/interface').MessageInstance
    /** antd notification instance */
    $notification?: import('antd/es/notification/interface').NotificationInstance
    /** antd modal instance */
    $modal?: Omit<import('antd/es/modal/confirm').ModalStaticFunctions, 'warn'>
  }
}
