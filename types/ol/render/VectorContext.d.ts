import Feature from 'ol/Feature';
import Circle from 'ol/geom/Circle';
import Geometry from 'ol/geom/Geometry';
import GeometryCollection from 'ol/geom/GeometryCollection';
import LineString from 'ol/geom/LineString';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiPolygon from 'ol/geom/MultiPolygon';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { DeclutterGroup } from 'ol/render/canvas';
import RenderFeature from 'ol/render/Feature';
import Fill from 'ol/style/Fill';
import ImageStyle from 'ol/style/Image';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
export default class VectorContext {
    constructor();
    drawMultiPolygon(multiPolygonGeometry: MultiPolygon, feature: Feature | RenderFeature): void;
    drawCircle(circleGeometry: Circle, feature: Feature): void;
    drawFeature(feature: Feature, style: Style): void;
    drawGeometry(geometry: Geometry): void;
    drawGeometryCollection(geometryCollectionGeometry: GeometryCollection, feature: Feature): void;
    drawLineString(lineStringGeometry: LineString | RenderFeature, feature: Feature | RenderFeature): void;
    drawMultiLineString(
        multiLineStringGeometry: MultiLineString | RenderFeature,
        feature: Feature | RenderFeature
    ): void;
    drawMultiPoint(multiPointGeometry: MultiPoint | RenderFeature, feature: Feature | RenderFeature): void;
    drawCustom(geometry: SimpleGeometry, feature: Feature | RenderFeature, renderer: () => void): void;
    drawPoint(pointGeometry: Point | RenderFeature, feature: Feature | RenderFeature): void;
    drawPolygon(polygonGeometry: Polygon | RenderFeature, feature: Feature | RenderFeature): void;
    drawText(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    setFillStrokeStyle(fillStyle: Fill, strokeStyle: Stroke): void;
    setImageStyle(imageStyle: ImageStyle, opt_declutterGroup?: DeclutterGroup): void;
    setStyle(style: Style): void;
    setTextStyle(textStyle: Text, opt_declutterGroup?: DeclutterGroup): void;
}
