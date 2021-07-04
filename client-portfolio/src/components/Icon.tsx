import { Image } from "react-bootstrap";

type Sizes = 'small' | 'medium' | 'large' | 'custom';

export const Icon = (props: Props & React.HTMLProps<HTMLImageElement>) => {
    const defSize : Sizes = 'medium';
    const sizeClass = props.iconSize === 'custom' ? '' : 'pf-icon-'+(props.iconSize || defSize);
    const highlightClass = props.highligth === undefined || props.highligth ? 'image-hover-highlight' : '';
    const roundedClass = props.rounded ? 'rounded' : '';

    if (props.iconSize === 'custom' && (!props.width || !props.height)) {
        throw new Error('Width or height not configured while the size is custom.');
    }
    const iconElement = <Image title={props.title} src={props.src} className={`${[props.className, sizeClass, highlightClass, roundedClass].join(' ')}`} width={props.width} height={props.height}/>;

    return props.url ? <a href={props.url || '#'} target={props.target} className='d-inline-block'> {iconElement} </a> : iconElement;
}


interface Props {
    src: string;
    url?: string;
    iconSize?: Sizes;
    rounded?: boolean;
    highligth?: boolean;
}

