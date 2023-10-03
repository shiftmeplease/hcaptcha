
//POST https://hcaptcha.com/checksiteconfig?v=1b812e2&host=cadastro.acesso.gov.br&sitekey=93b08d40-d46c-400a-ba07-6f91cda815b9&sc=1&swa=1&spst=1
let requestData = {
    v: "1b812e2", // static string also a part of script url
    host: "cadastro.acesso.gov.br", //website host
    sitekey: "93b08d40-d46c-400a-ba07-6f91cda815b9", //unique sitekey?
    sc: tt.Browser.supportsCanvas() >>> 0,
    swa: tt.Browser.supportsWebAssembly() >>> 0,
    spst: tt.Browser.supportsPST() >>> 0
}

let responseData =
{
    "features": {},
    "c": {
        "type": "hsw",
        "req": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJmIjowLCJzIjoyLCJ0IjoidyIsImQiOiIzSmVZOVkwS3dub1lHNU5ZUzZMQUVzczBnWi90NUFWZzVhMmp3c29mK2RhUUc3MVZmNFIzRlRVblMvb3dFc3VCTHMvRi9MU2txcXc0aWtpRkdUenQyRmpXZVJnb3Nqand1RjVYYlhDZlgxVGhTbjYyS01HMStCMkdBS3VaaVVUbXVGaEE0ZzgwRGY5UmViWjk3TDZuRWxiSVdOaE95UVhZZ3dkc3kraDArdnpXNHBpQVZXeFFYTnB2a1E9PXpKTFpwZ3pQM1d1VU9RWUsiLCJsIjoiaHR0cHM6Ly9uZXdhc3NldHMuaGNhcHRjaGEuY29tL2MvYmY2MDBiZCIsImkiOiJzaGEyNTYtTmxDelZxSlVqYnFaWUxoYXRJKzZUVStDVzBOb3BUbVh6bGdmL21oMjk1Zz0iLCJlIjoxNjk2MzM0Nzg3LCJuIjoiaHN3IiwiYyI6MTAwMH0.sT4hjYSyFsKG5bhYd2n-fFfvcFfF8DmpOSa4Pq3JWYOoV2Xjtybcx5WqMSFuNK33G-Knzm7RRs6CMFt2W4VOJrg2Tda6gfALKZVsaOFEbCapl7J3ncjR4Wlxqk0FfE00ziN4AsGwQtCGmW280V8lhTRnVmc89XmIzD4wvnxTBmQ"
    },
    "pass": true
}
