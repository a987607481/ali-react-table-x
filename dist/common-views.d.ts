import React from 'react';
export declare const InlineFlexCell: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ExpansionCell: import("styled-components").StyledComponent<"div", any, {}, never>;
interface IconProps extends React.SVGProps<SVGElement> {
    height?: number;
    preserveAspectRatio?: string;
    title?: string;
    viewBox?: string;
    width?: number;
    xmlns?: string;
    ref?: any;
}
declare function CaretDownIcon(props: IconProps): React.JSX.Element;
declare function InfoIcon(props: IconProps): React.JSX.Element;
declare function CaretRightIcon(props: IconProps): React.JSX.Element;
declare function CaretPlusIcon(props: IconProps): React.JSX.Element;
declare function CaretMinusIcon(props: IconProps): React.JSX.Element;
declare function LoadingIcon(props: IconProps): React.JSX.Element;
export declare const icons: {
    Loading: typeof LoadingIcon;
    CaretDown: typeof CaretDownIcon;
    CaretRight: typeof CaretRightIcon;
    CaretPlus: typeof CaretPlusIcon;
    CaretMinus: typeof CaretMinusIcon;
    Info: typeof InfoIcon;
};
export {};
