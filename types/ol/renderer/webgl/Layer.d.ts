import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Layer, { State } from 'ol/layer/Layer';
import { Pixel } from 'ol/pixel';
import { FrameState } from 'ol/PluggableMap';
import LayerRenderer from 'ol/renderer/Layer';
import WebGLMapRenderer from 'ol/renderer/webgl/Map';
import { Transform } from 'ol/transform';
import WebGLContext from 'ol/webgl/Context';
export default class WebGLLayerRenderer extends LayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, layer: Layer);
    protected texture: WebGLTexture;
    protected texCoordMatrix: Transform;
    protected framebuffer: WebGLFramebuffer;
    protected framebufferDimension: number;
    protected projectionMatrix: Transform;
    protected mapRenderer: WebGLMapRenderer;
    protected bindFramebuffer(frameState: FrameState, framebufferDimension: number): void;
    composeFrame(frameState: FrameState, layerState: State, context: WebGLContext): void;
    handleWebGLContextLost(): void;
    getTexCoordMatrix(): Transform;
    prepareFrame(frameState: FrameState, layerState: State, context: WebGLContext): boolean;
    getProjectionMatrix(): Transform;
    forEachLayerAtPixel<S, T, U>(
        pixel: Pixel,
        frameState: FrameState,
        callback: (this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T,
        thisArg: S
    ): T;
    getTexture(): WebGLTexture;
    on(type: string | string[], listener: (param0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (param0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (param0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
