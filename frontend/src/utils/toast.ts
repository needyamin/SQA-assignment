import { toast } from "sonner";

export const showLoading = (msg = "Loading...") => toast.loading(msg);
export const dismissToast = () => toast.dismiss();
export const showSuccess = (msg: string, description?: string) =>
  toast(msg, { description });
