const request = {
  request:
   IncomingMessage {
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: true,
        endEmitted: true,
        reading: false,
        sync: false,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: true,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: false,
     _events: {},
     _eventsCount: 0,
     _maxListeners: undefined,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [ServerResponse],
        [Symbol(asyncId)]: 19,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 1736,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 20,
           [Symbol(triggerId)]: 19 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [ServerResponse],
        [Symbol(asyncId)]: 19,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 1736,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 20,
           [Symbol(triggerId)]: 19 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     httpVersionMajor: 1,
     httpVersionMinor: 1,
     httpVersion: '1.1',
     complete: true,
     headers:
      { host: 'localhost:7777',
        connection: 'keep-alive',
        'content-length': '1468',
        accept: '*/*',
        'x-apollo-tracing': '1',
        'user-agent':
         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'sec-fetch-mode': 'cors',
        'content-type': 'application/json',
        origin: 'http://localhost:7777',
        'sec-fetch-site': 'same-origin',
        referer: 'http://localhost:7777/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,en-US;q=0.8,bn;q=0.7,la;q=0.6' },
     rawHeaders:
      [ 'Host',
        'localhost:7777',
        'Connection',
        'keep-alive',
        'Content-Length',
        '1468',
        'accept',
        '*/*',
        'X-Apollo-Tracing',
        '1',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'Sec-Fetch-Mode',
        'cors',
        'content-type',
        'application/json',
        'Origin',
        'http://localhost:7777',
        'Sec-Fetch-Site',
        'same-origin',
        'Referer',
        'http://localhost:7777/',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'en-GB,en;q=0.9,en-US;q=0.8,bn;q=0.7,la;q=0.6' ],
     trailers: {},
     rawTrailers: [],
     aborted: false,
     upgrade: false,
     url: '/',
     method: 'POST',
     statusCode: null,
     statusMessage: null,
     client:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [ServerResponse],
        [Symbol(asyncId)]: 19,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 1736,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 20,
           [Symbol(triggerId)]: 19 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     _consuming: true,
     _dumped: false,
     next: [Function: next],
     baseUrl: '',
     originalUrl: '/',
     _parsedUrl:
      Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: null,
        pathname: '/',
        path: '/',
        href: '/',
        _raw: '/' },
     params: {},
     query: {},
     res:
      ServerResponse {
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Socket],
        connection: [Socket],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: {},
        [Symbol(isCorked)]: false,
        [Symbol(outHeadersKey)]: [Object] },
     route: Route { path: '/', stack: [Array], methods: [Object] },
     body:
      { operationName: 'IntrospectionQuery',
        variables: {},
        query:
         'query IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n' },
     _body: true,
     length: undefined },
  response:
   ServerResponse {
     _events: { finish: [Function: bound resOnFinish] },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 19,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 1736,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 20,
           [Symbol(triggerId)]: 19 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 19,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 1736,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 20,
           [Symbol(triggerId)]: 19 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req:
      IncomingMessage {
        _readableState: [ReadableState],
        readable: false,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Socket],
        connection: [Socket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '/',
        method: 'POST',
        statusCode: null,
        statusMessage: null,
        client: [Socket],
        _consuming: true,
        _dumped: false,
        next: [Function: next],
        baseUrl: '',
        originalUrl: '/',
        _parsedUrl: [Url],
        params: {},
        query: {},
        res: [Circular],
        route: [Route],
        body: [Object],
        _body: true,
        length: undefined },
     locals: {}} }

var req = request.request

console.log(req);
