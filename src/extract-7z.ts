import { unpack } from "7zip-min";
import * as path from "path";

export function extract7z(archivePath: string, outputName: string) {
    return new Promise<void>((resolve, reject) => {
        const archivePathObj = path.parse(archivePath);
        const outputPath = path.join(archivePathObj.dir, outputName);

        unpack(archivePath, outputPath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
