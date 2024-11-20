const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

// 람다는 한가지의 기능을 하는 작은 함수
exports.handler = async (event, context, callback) => {
    const Bucket = event.Records[0].s3.Bucket.name; //node-bird
    const Key = decodeURIComponent(event.Records[0].s3.object.key);// original/12312312_eunkk.png
    console.log(Bucket, Key);
    const filename = Key.split('/')[Key.split('/').length - 1] ; // 12312312_eunkk.png
    const ext = Key.split('.')[Key.split('.').length-1 ].toLowerCase();
    const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;
    console.log('filename' ,filename, 'ext', ext);

    try {
        const s3Object = await s3.getObject({ Bucket, Key }).promise();
        console.log('original', s3Object.Body.length);
        const resizedImage = await sharp(s3Object.Body)
            .resize(400, 400, { fit: 'inside' })
            .toFormat(requiredFormat)
            .toBuffer();
            await s3.putObject({
                Bucket,
                Key: `thumb/${filename}`,
                Body: resizedImage,
            }).promise();
            console.log('put', resizedImage.length);
            return callback(null, `thumb/${filename}`);  //첫번째 인수가 서버쪽 에러, 두번째 인수가 성공
    } catch (error) {
        console.error(error);
        return callback(error);
    }
}
