const { MARKETSTORE_API_HOST, MARKETSTORE_API_PORT } = process.env;
// TODO: Get from somewhere.
const quote = 'BTC';
export default async (_parent, _args, _context, _info) => {
    const host = MARKETSTORE_API_HOST;
    const port = MARKETSTORE_API_PORT;
    const url = `http://${host}:${port}/markets`;
    const fetchResult = await fetch(url);
    // console.log('getMarkets fetchResult', fetchResult)
    const fetchResultText = await fetchResult.text();
    // console.log(`getMarkets fetchResultText "${fetchResultText}"`, typeof fetchResultText)
    const fetchResultJSON = JSON.parse(fetchResultText);
    // console.log('getMarkets fetchResultJSON', fetchResultJSON)
    const output = fetchResultJSON.map((base) => {
        return {
            base,
            quote,
        };
    });
    // console.log('getMarkets output', output)
    return output;
};