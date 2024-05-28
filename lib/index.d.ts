import type { FC } from 'react';
export interface IKeepAliveLayout {
    keepalive: any[];
    children?: any;
    keepElements?: any;
    dropByCacheKey?: (path: string) => void;
}
export declare const KeepAliveContext: import("react").Context<IKeepAliveLayout>;
export declare function useKeepOutlets(): import("react/jsx-runtime").JSX.Element;
declare const KeepAliveLayout: FC<IKeepAliveLayout>;
export default KeepAliveLayout;
