// custom.d.ts
declare module "@dylanpiriou/simple-lightbox" {
	import { FC, ReactNode } from "react";

	interface LightboxProps {
		show: boolean;
		onClose: () => void;
		children: ReactNode;
	}

	export const Lightbox: FC<LightboxProps>;
}

declare module "@/Components/Lightbox" {
	import React from "react";

	interface LightboxProps {
		show: boolean;
		onClose: () => void;
		children: React.ReactNode;
	}

	export const Lightbox: React.FC<LightboxProps>;
}