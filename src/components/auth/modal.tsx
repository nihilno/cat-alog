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
          <DialogTitle className="mb-2 flex flex-col items-center gap-2 text-center text-2xl font-bold">
            Sign in with Google
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mx-auto max-w-[35ch] text-center text-sm">
            One click, infinite features — your bookmarks live safely with
            Google.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-6">
          <SignInGoogle />
          <p className="text-muted-foreground mt-6 text-center text-xs">
            Powered by Google’s secure authentication
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
