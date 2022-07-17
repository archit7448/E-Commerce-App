import { toast } from "react-toastify";
// import "./notify.css";
const notifyMessage = (message) =>
  toast(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast-container",
  });
const notificationSuccess = (message) =>
  toast.success(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast-container",
  });
const notificationError = (message) =>
  toast.error(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast-container",
  });
const notificationInfo = (message) =>
  toast.info(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast-container",
  });

export {
  notifyMessage,
  notificationError,
  notificationSuccess,
  notificationInfo,
};
