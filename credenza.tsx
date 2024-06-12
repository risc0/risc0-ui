"use client";

import { cn } from "cn";
import { useMediaQuery } from "hooks/use-media-query";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

interface BaseProps {
  children: ReactNode;
}

interface RootCredenzaProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface CredenzaProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const desktop = "(min-width: 768px)";

const Credenza = ({ children, ...props }: RootCredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const Credenza = isDesktop ? Dialog : Drawer;

  return <Credenza {...props}>{children}</Credenza>;
};

const CredenzaTrigger = ({ children, ...rest }: CredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const CredenzaTrigger = isDesktop ? DialogTrigger : DrawerTrigger;

  return <CredenzaTrigger {...rest}>{children}</CredenzaTrigger>;
};

const CredenzaClose = ({ children, ...rest }: CredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const CredenzaClose = isDesktop ? DialogClose : DrawerClose;

  return <CredenzaClose {...rest}>{children}</CredenzaClose>;
};

const CredenzaContent = ({ children, ...rest }: CredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const CredenzaContent = isDesktop ? DialogContent : DrawerContent;

  return <CredenzaContent {...rest}>{children}</CredenzaContent>;
};

const CredenzaDescription = ({ children, ...rest }: CredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const CredenzaDescription = isDesktop ? DialogDescription : DrawerDescription;

  return <CredenzaDescription {...rest}>{children}</CredenzaDescription>;
};

const CredenzaHeader = ({ children, ...rest }: CredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const CredenzaHeader = isDesktop ? DialogHeader : DrawerHeader;

  return <CredenzaHeader {...rest}>{children}</CredenzaHeader>;
};

const CredenzaTitle = ({ children, ...rest }: CredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const CredenzaTitle = isDesktop ? DialogTitle : DrawerTitle;

  return <CredenzaTitle {...rest}>{children}</CredenzaTitle>;
};

const CredenzaBody = ({ className, children, ...rest }: CredenzaProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...rest}>
      {children}
    </div>
  );
};

const CredenzaFooter = ({ children, ...rest }: CredenzaProps) => {
  const isDesktop = useMediaQuery(desktop);
  const CredenzaFooter = isDesktop ? DialogFooter : DrawerFooter;

  return <CredenzaFooter {...rest}>{children}</CredenzaFooter>;
};

export {
  Credenza,
  CredenzaTrigger,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaBody,
  CredenzaFooter,
};
