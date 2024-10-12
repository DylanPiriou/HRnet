// custom.d.ts
declare module "@dylanpiriou/simple-lightbox" {
	import { FC, ReactNode } from "react";

	interface LightboxProps {
		children: ReactNode;
	}

	export const Lightbox: FC<LightboxProps>;
}
