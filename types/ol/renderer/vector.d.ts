import Event from 'ol/events/Event';
import Feature, { FeatureLike } from 'ol/Feature';
import Circle from 'ol/geom/Circle';
import Geometry from 'ol/geom/Geometry';
import GeometryCollection from 'ol/geom/GeometryCollection';
import LineString from 'ol/geom/LineString';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiPolygon from 'ol/geom/MultiPolygon';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import RenderFeature from 'ol/render/Feature';
import ReplayGroup from 'ol/render/ReplayGroup';
import Style from 'ol/style/Style';
export function defaultOrder(feature1: FeatureLike, feature2: FeatureLike): number;
export function getSquaredTolerance(resolution: number, pixelRatio: number): number;
export function getTolerance(resolution: number, pixelRatio: number): number;
export function renderFeature<T>(
    replayGroup: ReplayGroup,
    feature: FeatureLike,
    style: Style,
    squaredTolerance: number,
    listener: (this: T, param1: Event) => void,
    thisArg: T
): boolean;
