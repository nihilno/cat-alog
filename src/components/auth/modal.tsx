import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SignInGoogle from "./sign-in-google";

function Modal(props: ModalProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <SignInGoogle />
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
