import { toast } from "react-toastify";

const notifyMessage = (message) => toast(message);
const notificationSuccess = (message) => toast.success(message);
const notificationError = (message) => toast.error(message);
const notificationInfo = (message) => toast.info(message);

export {
  notifyMessage,
  notificationError,
  notificationSuccess,
  notificationInfo,
};
