// @ts-ignore -- not sure why this is not working
import { toast } from "sonner";

export interface SetClipboardParams {
  onFailure?: () => void;
  onSuccess?: () => void;
  value: string;
}

export const setClipboard = ({
  value,
  onSuccess = () => toast.success("Copied to clipboard"),
  onFailure = () => toast.error("Failed to copy to clipboard"),
}: SetClipboardParams) => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      onSuccess?.();
    })
    .catch(() => {
      onFailure?.();
    });
};
