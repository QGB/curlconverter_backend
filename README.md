# curlconverter backend service

## usage:

URL parameter `c` is curl string

`!curl "http://192.168.1.26:3000/toPython?c=curl+127.1"`

return:

```
import requests

response = requests.get('http://127.1')
```

## build and run
```

docker run -it -v /root/:/root/ -v /home/qgb/:/home/qgb/ -v /home/qgb/node/usr_local_16.1/:/usr/local/  -w "/home/qgb/" -p 3000:3000 -p 5173:5173 node:16 bash

cd curlconverter_backend


# npm install express curlconverter                                                                                      
removed 101 packages, and changed 2 packages in 3s       

# npm start

```
## support language list
```js
['toAnsible',
 'toAnsibleWarn',
 'toBrowser',
 'toBrowserWarn',
 'toCFML',
 'toCFMLWarn',
 'toCSharp',
 'toCSharpWarn',
 'toClojure',
 'toClojureWarn',
 'toDart',
 'toDartWarn',
 'toElixir',
 'toElixirWarn',
 'toGo',
 'toGoWarn',
 'toHTTP',
 'toHTTPWarn',
 'toHarString',
 'toHarStringWarn',
 'toHttpie',
 'toHttpieWarn',
 'toJava',
 'toJavaHttpUrlConnection',
 'toJavaHttpUrlConnectionWarn',
 'toJavaJsoup',
 'toJavaJsoupWarn',
 'toJavaOkHttp',
 'toJavaOkHttpWarn',
 'toJavaScript',
 'toJavaScriptJquery',
 'toJavaScriptJqueryWarn',
 'toJavaScriptWarn',
 'toJavaScriptXHR',
 'toJavaScriptXHRWarn',
 'toJavaWarn',
 'toJsonString',
 'toJsonStringWarn',
 'toJulia',
 'toJuliaWarn',
 'toKotlin',
 'toKotlinWarn',
 'toLua',
 'toLuaWarn',
 'toMATLAB',
 'toMATLABWarn',
 'toNode',
 'toNodeAxios',
 'toNodeAxiosWarn',
 'toNodeFetch',
 'toNodeFetchWarn',
 'toNodeGot',
 'toNodeGotWarn',
 'toNodeHttp',
 'toNodeHttpWarn',
 'toNodeKy',
 'toNodeKyWarn',
 'toNodeRequest',
 'toNodeRequestWarn',
 'toNodeSuperAgent',
 'toNodeSuperAgentWarn',
 'toNodeWarn',
 'toOCaml',
 'toOCamlWarn',
 'toObjectiveC',
 'toObjectiveCWarn',
 'toPerl',
 'toPerlWarn',
 'toPhp',
 'toPhpGuzzle',
 'toPhpGuzzleWarn',
 'toPhpRequests',
 'toPhpRequestsWarn',
 'toPhpWarn',
 'toPowershellRestMethod',
 'toPowershellRestMethodWarn',
 'toPowershellWebRequest',
 'toPowershellWebRequestWarn',
 'toPython',
 'toPythonHttp',
 'toPythonHttpWarn',
 'toPythonWarn',
 'toR',
 'toRWarn',
 'toRuby',
 'toRubyWarn',
 'toRust',
 'toRustWarn',
 'toSwift',
 'toSwiftWarn',
 'toWget',
 'toWgetWarn']
```
