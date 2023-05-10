import cloudinary, {
  UploadApiResponse,
  UploadApiErrorResponse
} from 'cloudinary';

export function uploads(
  file: string,
  public_id?: string,
  override?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id: public_id,
        overwrite: override,
        invalidate: invalidate
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (result) {
          resolve(result);
        } else {
          resolve(error);
        }
      }
    );
  });
}
