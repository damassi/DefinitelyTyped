namespace mathTests.matrixTests {
    const { vec2, vec3, vec4, mat2, mat2d, mat3, mat4, quat } = adone.math.matrix;
    type mat2 = adone.math.matrix.I.mat2;
    type mat2d = adone.math.matrix.I.mat2d;
    type mat3 = adone.math.matrix.I.mat3;
    type mat4 = adone.math.matrix.I.mat4;

    let outVal: number;
    let outBool: boolean;
    let outStr: string;

    let vecArray = new Float32Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    const vec2A = vec2.fromValues(1, 2);
    const vec2B = vec2.fromValues(3, 4);
    const vec3A = vec3.fromValues(1, 2, 3);
    const vec3B = vec3.fromValues(3, 4, 5);
    const vec4A = vec4.fromValues(1, 2, 3, 4);
    const vec4B = vec4.fromValues(3, 4, 5, 6);
    const mat2A = mat2.fromValues(1, 2, 3, 4);
    const mat2B = mat2.fromValues(1, 2, 3, 4);
    const mat2dA = mat2d.fromValues(1, 2, 3, 4, 5, 6);
    const mat2dB = mat2d.fromValues(1, 2, 3, 4, 5, 6);
    const mat3A = mat3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);
    const mat3B = mat3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);
    const mat4A = mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    const mat4B = mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    const quatA = quat.fromValues(1, 2, 3, 4);
    const quatB = quat.fromValues(5, 6, 7, 8);

    let outVec2 = vec2.create();
    let outVec3 = vec3.create();
    let outVec4 = vec4.create();
    let outMat2 = mat2.create();
    let outMat2d = mat2d.create();
    let outMat3 = mat3.create();
    let outMat4 = mat4.create();
    let outQuat = quat.create();

    let outMat2Null: mat2 | null;
    let outMat2dNull: mat2d | null;
    let outMat3Null: mat3 | null;
    let outMat4Null: mat4 | null;

    {
        outVec2 = vec2.create();
        outVec2 = vec2.clone(vec2A);
        outVec2 = vec2.fromValues(1, 2);
        outVec2 = vec2.copy(outVec2, vec2A);
        outVec2 = vec2.set(outVec2, 1, 2);
        outVec2 = vec2.add(outVec2, vec2A, vec2B);
        outVec2 = vec2.subtract(outVec2, vec2A, vec2B);
        outVec2 = vec2.sub(outVec2, vec2A, vec2B);
        outVec2 = vec2.multiply(outVec2, vec2A, vec2B);
        outVec2 = vec2.mul(outVec2, vec2A, vec2B);
        outVec2 = vec2.divide(outVec2, vec2A, vec2B);
        outVec2 = vec2.div(outVec2, vec2A, vec2B);
        outVec2 = vec2.ceil(outVec2, vec2A);
        outVec2 = vec2.floor(outVec2, vec2A);
        outVec2 = vec2.min(outVec2, vec2A, vec2B);
        outVec2 = vec2.max(outVec2, vec2A, vec2B);
        outVec2 = vec2.round(outVec2, vec2A);
        outVec2 = vec2.scale(outVec2, vec2A, 2);
        outVec2 = vec2.scaleAndAdd(outVec2, vec2A, vec2B, 0.5);
        outVal = vec2.distance(vec2A, vec2B);
        outVal = vec2.dist(vec2A, vec2B);
        outVal = vec2.squaredDistance(vec2A, vec2B);
        outVal = vec2.sqrDist(vec2A, vec2B);
        outVal = vec2.length(vec2A);
        outVal = vec2.len(vec2A);
        outVal = vec2.squaredLength(vec2A);
        outVal = vec2.sqrLen(vec2A);
        outVec2 = vec2.negate(outVec2, vec2A);
        outVec2 = vec2.inverse(outVec2, vec2A);
        outVec2 = vec2.normalize(outVec2, vec2A);
        outVal = vec2.dot(vec2A, vec2B);
        outVec2 = vec2.cross(outVec2, vec2A, vec2B);
        outVec2 = vec2.lerp(outVec2, vec2A, vec2B, 0.5);
        outVec2 = vec2.random(outVec2);
        outVec2 = vec2.random(outVec2, 5.0);
        outVec2 = vec2.transformMat2(outVec2, vec2A, mat2A);
        outVec2 = vec2.transformMat2d(outVec2, vec2A, mat2dA);
        outVec2 = vec2.transformMat3(outVec2, vec2A, mat3A);
        outVec2 = vec2.transformMat4(outVec2, vec2A, mat4A);
        vecArray = vec2.forEach(vecArray, 0, 0, 0, vec2.normalize);
        outStr = vec2.str(vec2A);
        outBool = vec2.exactEquals(vec2A, vec2B);
        outBool = vec2.equals(vec2A, vec2B);
        outVec2 = vec2.add(outVec2, [0, 1], [2, 3]); // test one method with number array input
    }

    {
        outVec3 = vec3.create();
        outVec3 = vec3.clone(vec3A);
        outVec3 = vec3.fromValues(1, 2, 3);
        outVec3 = vec3.copy(outVec3, vec3A);
        outVec3 = vec3.set(outVec3, 1, 2, 3);
        outVec3 = vec3.add(outVec3, vec3A, vec3B);
        outVec3 = vec3.subtract(outVec3, vec3A, vec3B);
        outVec3 = vec3.sub(outVec3, vec3A, vec3B);
        outVec3 = vec3.multiply(outVec3, vec3A, vec3B);
        outVec3 = vec3.mul(outVec3, vec3A, vec3B);
        outVec3 = vec3.divide(outVec3, vec3A, vec3B);
        outVec3 = vec3.div(outVec3, vec3A, vec3B);
        outVec3 = vec3.ceil(outVec3, vec3A);
        outVec3 = vec3.floor(outVec3, vec3A);
        outVec3 = vec3.min(outVec3, vec3A, vec3B);
        outVec3 = vec3.max(outVec3, vec3A, vec3B);
        outVec3 = vec3.round(outVec3, vec3A);
        outVec3 = vec3.scale(outVec3, vec3A, 2);
        outVec3 = vec3.scaleAndAdd(outVec3, vec3A, vec3B, 0.5);
        outVal = vec3.distance(vec3A, vec3B);
        outVal = vec3.dist(vec3A, vec3B);
        outVal = vec3.squaredDistance(vec3A, vec3B);
        outVal = vec3.sqrDist(vec3A, vec3B);
        outVal = vec3.length(vec3A);
        outVal = vec3.len(vec3A);
        outVal = vec3.squaredLength(vec3A);
        outVal = vec3.sqrLen(vec3A);
        outVec3 = vec3.negate(outVec3, vec3A);
        outVec3 = vec3.inverse(outVec3, vec3A);
        outVec3 = vec3.normalize(outVec3, vec3A);
        outVal = vec3.dot(vec3A, vec3B);
        outVec3 = vec3.cross(outVec3, vec3A, vec3B);
        outVec3 = vec3.lerp(outVec3, vec3A, vec3B, 0.5);
        outVec3 = vec3.hermite(outVec3, vec3A, vec3B, vec3A, vec3B, 0.5);
        outVec3 = vec3.bezier(outVec3, vec3A, vec3B, vec3A, vec3B, 0.5);
        outVec3 = vec3.random(outVec3);
        outVec3 = vec3.random(outVec3, 5.0);
        outVec3 = vec3.transformMat3(outVec3, vec3A, mat3A);
        outVec3 = vec3.transformMat4(outVec3, vec3A, mat4A);
        outVec3 = vec3.transformQuat(outVec3, vec3A, quatA);
        outVec3 = vec3.rotateX(outVec3, vec3A, vec3B, Math.PI);
        outVec3 = vec3.rotateY(outVec3, vec3A, vec3B, Math.PI);
        outVec3 = vec3.rotateZ(outVec3, vec3A, vec3B, Math.PI);
        vecArray = vec3.forEach(vecArray, 0, 0, 0, vec3.normalize);
        outVal = vec3.angle(vec3A, vec3B);
        outStr = vec3.str(vec3A);
        outBool = vec3.exactEquals(vec3A, vec3B);
        outBool = vec3.equals(vec3A, vec3B);
        outVec3 = vec3.add(outVec3, [0, 1, 2], [3, 4, 5]); // test one method with number array input
    }

    {
        outVec4 = vec4.create();
        outVec4 = vec4.clone(vec4A);
        outVec4 = vec4.fromValues(1, 2, 3, 4);
        outVec4 = vec4.copy(outVec4, vec4A);
        outVec4 = vec4.set(outVec4, 1, 2, 3, 4);
        outVec4 = vec4.add(outVec4, vec4A, vec4B);
        outVec4 = vec4.subtract(outVec4, vec4A, vec4B);
        outVec4 = vec4.sub(outVec4, vec4A, vec4B);
        outVec4 = vec4.multiply(outVec4, vec4A, vec4B);
        outVec4 = vec4.mul(outVec4, vec4A, vec4B);
        outVec4 = vec4.divide(outVec4, vec4A, vec4B);
        outVec4 = vec4.div(outVec4, vec4A, vec4B);
        outVec4 = vec4.ceil(outVec4, vec4A);
        outVec4 = vec4.floor(outVec4, vec4A);
        outVec4 = vec4.min(outVec4, vec4A, vec4B);
        outVec4 = vec4.max(outVec4, vec4A, vec4B);
        outVec4 = vec4.scale(outVec4, vec4A, 2);
        outVec4 = vec4.scaleAndAdd(outVec4, vec4A, vec4B, 0.5);
        outVal = vec4.distance(vec4A, vec4B);
        outVal = vec4.dist(vec4A, vec4B);
        outVal = vec4.squaredDistance(vec4A, vec4B);
        outVal = vec4.sqrDist(vec4A, vec4B);
        outVal = vec4.length(vec4A);
        outVal = vec4.len(vec4A);
        outVal = vec4.squaredLength(vec4A);
        outVal = vec4.sqrLen(vec4A);
        outVec4 = vec4.negate(outVec4, vec4A);
        outVec4 = vec4.inverse(outVec4, vec4A);
        outVec4 = vec4.normalize(outVec4, vec4A);
        outVal = vec4.dot(vec4A, vec4B);
        outVec4 = vec4.lerp(outVec4, vec4A, vec4B, 0.5);
        outVec4 = vec4.random(outVec4);
        outVec4 = vec4.random(outVec4, 5.0);
        outVec4 = vec4.transformMat4(outVec4, vec4A, mat4A);
        outVec4 = vec4.transformQuat(outVec4, vec4A, quatA);
        vecArray = vec4.forEach(vecArray, 0, 0, 0, vec4.normalize);
        outStr = vec4.str(vec4A);
        outBool = vec4.exactEquals(vec4A, vec4B);
        outBool = vec4.equals(vec4A, vec4B);
        outVec4 = vec4.add(outVec4, [0, 1, 2, 3], [4, 5, 6, 7]); // test one method with number array input
    }

    {
        outMat2 = mat2.create();
        outMat2 = mat2.clone(mat2A);
        outMat2 = mat2.copy(outMat2, mat2A);
        outMat2 = mat2.identity(outMat2);
        outMat2 = mat2.fromValues(1, 2, 3, 4);
        outMat2 = mat2.set(outMat2, 1, 2, 3, 4);
        outMat2 = mat2.transpose(outMat2, mat2A);
        outMat2Null = mat2.invert(outMat2, mat2A);
        outMat2 = mat2.adjoint(outMat2, mat2A);
        outVal = mat2.determinant(mat2A);
        outMat2 = mat2.multiply(outMat2, mat2A, mat2B);
        outMat2 = mat2.mul(outMat2, mat2A, mat2B);
        outMat2 = mat2.rotate(outMat2, mat2A, Math.PI * 0.5);
        outMat2 = mat2.scale(outMat2, mat2A, vec2A);
        outMat2 = mat2.fromRotation(outMat2, 0.5);
        outMat2 = mat2.fromScaling(outMat2, vec2A);
        outStr = mat2.str(mat2A);
        outVal = mat2.frob(mat2A);
        const L = mat2.create();
        const D = mat2.create();
        const U = mat2.create();
        outMat2 = mat2.LDU(L, D, U, mat2A);
        outMat2 = mat2.add(outMat2, mat2A, mat2B);
        outMat2 = mat2.subtract(outMat2, mat2A, mat2B);
        outMat2 = mat2.sub(outMat2, mat2A, mat2B);
        outBool = mat2.exactEquals(mat2A, mat2B);
        outBool = mat2.equals(mat2A, mat2B);
        outMat2 = mat2.multiplyScalar(outMat2, mat2A, 2);
        outMat2 = mat2.multiplyScalarAndAdd(outMat2, mat2A, mat2B, 2);
    }

    {
        outMat2d = mat2d.create();
        outMat2d = mat2d.clone(mat2dA);
        outMat2d = mat2d.copy(outMat2d, mat2dA);
        outMat2d = mat2d.identity(outMat2d);
        outMat2d = mat2d.fromValues(1, 2, 3, 4, 5, 6);
        outMat2d = mat2d.set(outMat2d, 1, 2, 3, 4, 5, 6);
        outMat2dNull = mat2d.invert(outMat2d, mat2dA);
        outVal = mat2d.determinant(mat2dA);
        outMat2d = mat2d.multiply(outMat2d, mat2dA, mat2dB);
        outMat2d = mat2d.mul(outMat2d, mat2dA, mat2dB);
        outMat2d = mat2d.rotate(outMat2d, mat2dA, Math.PI * 0.5);
        outMat2d = mat2d.scale(outMat2d, mat2dA, vec2A);
        outMat2d = mat2d.translate(outMat2d, mat2dA, vec2A);
        outMat2d = mat2d.fromRotation(outMat2d, 0.5);
        outMat2d = mat2d.fromScaling(outMat2d, vec2A);
        outMat2d = mat2d.fromTranslation(outMat2d, vec2A);
        outStr = mat2d.str(mat2dA);
        outVal = mat2d.frob(mat2dA);
        outMat2d = mat2d.add(outMat2d, mat2dA, mat2dB);
        outMat2d = mat2d.subtract(outMat2d, mat2dA, mat2dB);
        outMat2d = mat2d.sub(outMat2d, mat2dA, mat2dB);
        outMat2d = mat2d.multiplyScalar(outMat2d, mat2dA, 2);
        outMat2d = mat2d.multiplyScalarAndAdd(outMat2d, mat2dA, mat2dB, 2);
        outBool = mat2d.exactEquals(mat2dA, mat2dB);
        outBool = mat2d.equals(mat2dA, mat2dB);
    }

    {
        outMat3 = mat3.create();
        outMat3 = mat3.fromMat4(outMat3, mat4A);
        outMat3 = mat3.clone(mat3A);
        outMat3 = mat3.copy(outMat3, mat3A);
        outMat3 = mat3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);
        outMat3 = mat3.set(outMat3, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        outMat3 = mat3.identity(outMat3);
        outMat3 = mat3.transpose(outMat3, mat3A);
        outMat3Null = mat3.invert(outMat3, mat3A);
        outMat3 = mat3.adjoint(outMat3, mat3A);
        outVal = mat3.determinant(mat3A);
        outMat3 = mat3.multiply(outMat3, mat3A, mat3B);
        outMat3 = mat3.mul(outMat3, mat3A, mat3B);
        outMat3 = mat3.translate(outMat3, mat3A, vec3A);
        outMat3 = mat3.rotate(outMat3, mat3A, Math.PI / 2);
        outMat3 = mat3.scale(outMat3, mat3A, vec2A);
        outMat3 = mat3.fromTranslation(outMat3, vec2A);
        outMat3 = mat3.fromRotation(outMat3, Math.PI);
        outMat3 = mat3.fromScaling(outMat3, vec2A);
        outMat3 = mat3.fromMat2d(outMat3, mat2dA);
        outMat3 = mat3.fromQuat(outMat3, quatA);
        outMat3Null = mat3.normalFromMat4(outMat3, mat4A);
        outStr = mat3.str(mat3A);
        outVal = mat3.frob(mat3A);
        outMat3 = mat3.add(outMat3, mat3A, mat3B);
        outMat3 = mat3.subtract(outMat3, mat3A, mat3B);
        outMat3 = mat3.sub(outMat3, mat3A, mat3B);
        outMat3 = mat3.multiplyScalar(outMat3, mat3A, 2);
        outMat3 = mat3.multiplyScalarAndAdd(outMat3, mat3A, mat3B, 2);
        outBool = mat3.exactEquals(mat3A, mat3B);
        outBool = mat3.equals(mat3A, mat3B);
    }

    {
        outMat4 = mat4.create();
        outMat4 = mat4.clone(mat4A);
        outMat4 = mat4.copy(outMat4, mat4A);
        outMat4 = mat4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        outMat4 = mat4.set(outMat4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        outMat4 = mat4.identity(outMat4);
        outMat4 = mat4.transpose(outMat4, mat4A);
        outMat4Null = mat4.invert(outMat4, mat4A);
        outMat4 = mat4.adjoint(outMat4, mat4A);
        outVal = mat4.determinant(mat4A);
        outMat4 = mat4.multiply(outMat4, mat4A, mat4B);
        outMat4 = mat4.mul(outMat4, mat4A, mat4B);
        outMat4 = mat4.translate(outMat4, mat4A, vec3A);
        outMat4 = mat4.scale(outMat4, mat4A, vec3A);
        outMat4Null = mat4.rotate(outMat4, mat4A, Math.PI, vec3A);
        outMat4 = mat4.rotateX(outMat4, mat4A, Math.PI);
        outMat4 = mat4.rotateY(outMat4, mat4A, Math.PI);
        outMat4 = mat4.rotateZ(outMat4, mat4A, Math.PI);
        outMat4 = mat4.fromTranslation(outMat4, vec3A);
        outMat4Null = mat4.fromRotation(outMat4, Math.PI, vec3A);
        outMat4 = mat4.fromScaling(outMat4, vec3A);
        outMat4 = mat4.fromXRotation(outMat4, Math.PI);
        outMat4 = mat4.fromYRotation(outMat4, Math.PI);
        outMat4 = mat4.fromZRotation(outMat4, Math.PI);
        outMat4 = mat4.fromRotationTranslation(outMat4, quatA, vec3A);
        outVec3 = mat4.getTranslation(outVec3, mat4A);
        outVec3 = mat4.getScaling(outVec3, mat4A);
        outQuat = mat4.getRotation(outQuat, mat4A);
        outMat4 = mat4.fromRotationTranslationScale(outMat4, quatA, vec3A, vec3B);
        outMat4 = mat4.fromRotationTranslationScaleOrigin(outMat4, quatA, vec3A, vec3B, vec3A);
        outMat4 = mat4.fromQuat(outMat4, quatB);
        outMat4 = mat4.frustum(outMat4, -1, 1, -1, 1, -1, 1);
        outMat4 = mat4.perspective(outMat4, Math.PI, 1, 0, 1);
        outMat4 = mat4.perspectiveFromFieldOfView(
            outMat4,
            { upDegrees: Math.PI, downDegrees: -Math.PI, leftDegrees: -Math.PI, rightDegrees: Math.PI },
            1,
            0
        );
        outMat4 = mat4.ortho(outMat4, -1, 1, -1, 1, -1, 1);
        outMat4 = mat4.lookAt(outMat4, vec3A, vec3B, vec3A);
        outStr = mat4.str(mat4A);
        outVal = mat4.frob(mat4A);
        outMat4 = mat4.add(outMat4, mat4A, mat4B);
        outMat4 = mat4.subtract(outMat4, mat4A, mat4B);
        outMat4 = mat4.sub(outMat4, mat4A, mat4B);
        outMat4 = mat4.multiplyScalar(outMat4, mat4A, 2);
        outMat4 = mat4.multiplyScalarAndAdd(outMat4, mat4A, mat4B, 2);
        outBool = mat4.exactEquals(mat4A, mat4B);
        outBool = mat4.equals(mat4A, mat4B);
    }

    {
        const deg90 = Math.PI / 2;
        outQuat = quat.create();
        outQuat = quat.clone(quatA);
        outQuat = quat.fromValues(1, 2, 3, 4);
        outQuat = quat.copy(outQuat, quatA);
        outQuat = quat.set(outQuat, 1, 2, 3, 4);
        outQuat = quat.identity(outQuat);
        outQuat = quat.rotationTo(outQuat, vec3A, vec3B);
        outQuat = quat.setAxes(outQuat, vec3A, vec3B, vec3A);
        outQuat = quat.setAxisAngle(outQuat, vec3A, Math.PI * 0.5);
        outVal = quat.getAxisAngle(outVec3, quatA);
        outQuat = quat.add(outQuat, quatA, quatB);
        outQuat = quat.multiply(outQuat, quatA, quatB);
        outQuat = quat.mul(outQuat, quatA, quatB);
        outQuat = quat.scale(outQuat, quatA, 2);
        outVal = quat.length(quatA);
        outVal = quat.len(quatA);
        outVal = quat.squaredLength(quatA);
        outVal = quat.sqrLen(quatA);
        outQuat = quat.normalize(outQuat, quatA);
        outVal = quat.dot(quatA, quatB);
        outQuat = quat.lerp(outQuat, quatA, quatB, 0.5);
        outQuat = quat.slerp(outQuat, quatA, quatB, 0.5);
        outQuat = quat.invert(outQuat, quatA);
        outQuat = quat.conjugate(outQuat, quatA);
        outStr = quat.str(quatA);
        outQuat = quat.rotateX(outQuat, quatA, deg90);
        outQuat = quat.rotateY(outQuat, quatA, deg90);
        outQuat = quat.rotateZ(outQuat, quatA, deg90);
        outQuat = quat.fromMat3(outQuat, mat3A);
        outQuat = quat.calculateW(outQuat, quatA);
        outBool = quat.exactEquals(quatA, quatB);
        outBool = quat.equals(quatA, quatB);
    }
}
