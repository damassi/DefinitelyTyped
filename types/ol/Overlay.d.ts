import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import BaseObject, { ObjectEvent } from 'ol/Object';
import OverlayPositioning from 'ol/OverlayPositioning';
import { Pixel } from 'ol/pixel';
import PluggableMap from 'ol/PluggableMap';
import { Size } from 'ol/size';
export interface Options {
    id?: number | string;
    element?: HTMLElement;
    offset?: number[];
    position?: Coordinate;
    positioning?: OverlayPositioning;
    stopEvent?: boolean;
    insertFirst?: boolean;
    autoPan?: boolean;
    autoPanAnimation?: PanOptions;
    autoPanMargin?: number;
    className?: string;
}
export default class Overlay extends BaseObject {
    constructor(options: Options);
    protected autoPan: boolean;
    protected autoPanMargin: number;
    protected element: HTMLElement;
    protected stopEvent: boolean;
    protected rendered: { [key: string]: any };
    protected options: Options;
    protected autoPanAnimation: PanOptions;
    protected id: number | string;
    protected insertFirst: boolean;
    protected mapPostrenderListenerKey: EventsKey;
    protected updateRenderedPosition(pixel: Pixel, mapSize: Size): void;
    protected getRect(element: HTMLElement, size: Size): Extent;
    protected handleElementChanged(): void;
    protected handleMapChanged(): void;
    protected handleOffsetChanged(): void;
    protected handlePositionChanged(): void;
    protected setVisible(visible: boolean): void;
    protected updatePixelPosition(): void;
    protected render(): void;
    protected panIntoView(): void;
    protected handlePositioningChanged(): void;
    getPositioning(): OverlayPositioning;
    getOptions(): Options;
    getOffset(): number[];
    setElement(element: HTMLElement): void;
    setMap(map: PluggableMap): void;
    getPosition(): Coordinate;
    setPosition(position: Coordinate): void;
    setPositioning(positioning: OverlayPositioning): void;
    getMap(): PluggableMap;
    getId(): number | string;
    getElement(): HTMLElement;
    setOffset(offset: number[]): void;
    on(type: string | string[], listener: (param0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (param0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (param0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:element', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:map', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:offset', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:position', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:positioning', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export interface PanOptions {
    duration?: number;
    easing?: (param0: number) => number;
}
