export function normalizeQuestion(text: string) {

    let result = text;

    result = result.trim();

    result = result.toLowerCase();

    result = result.replace(/\s+/g, " ");

    result = result.replace(/[−–—]/g, "-");

    result = result.replace(/[×⋅·]/g, "*");

    result = result.replace(/[÷]/g, "/");

    result = result.replace(/\s*([=+\-*/()<>])\s*/g, "$1");

    const dictionary: Record<string, string> = {

        pt: "phương trình",

        hs: "hàm số",

        gt: "giải thích",

        cm: "chứng minh",

        kl: "kết luận",

        đpcm: "điều phải chứng minh"

    };

    for (const key in dictionary) {

        result = result.replace(

            new RegExp(`\\b${key}\\b`, "g"),

            dictionary[key]

        );

    }

    result = result.replace(/[“”"']/g, "");

    result = result.replace(/[!?]+/g, "");

    result = result.replace(/,+/g, ",");

    result = result.replace(/\.+/g, ".");

    return result.trim();

}