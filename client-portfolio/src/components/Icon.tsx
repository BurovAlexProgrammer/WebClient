import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

type Sizes = 'small' | 'medium' | 'large' | 'custom';

export const Icon = (props: Props & React.HTMLProps<HTMLElement>) => {
    const defSize : Sizes = 'medium';
    const sizeClass = props.iconSize === 'custom' ? '' : 'pf-icon-'+(props.size || defSize);
    const highlightClass = props.highligth === undefined || props.highligth ? 'image-hover-highlight' : '';
    const roundedClass = props.rounded ? 'rounded' : '';

    if (props.iconSize === 'custom' && (!props.width || !props.height)) {
        throw new Error('Width or height not configured while the size is custom.');
    }
    const iconElement = <Image src={props.src} className={`${[props.className, sizeClass, highlightClass, roundedClass].join(' ')}`} width={props.width} height={props.height}/>;

    return props.url ? <Link to={props.url || '#'}> {iconElement} </Link> : iconElement;
}


interface Props {
    src: string;
    url?: string;
    iconSize?: Sizes;
    width?: number;
    height?: number;
    rounded?: boolean;
    highligth?: boolean;
}

