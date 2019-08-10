#!/usr/bin/env node

"use strict";

const util = require("util");
const http = require("http");
var url = require("url");
const { article, getArticle, getMoreArticles } = require("./article");

const HTTP_PORT = 8039;

const delay = util.promisify(setTimeout);

const httpserv = http.createServer(handleRequest);

main();

function main() {
  httpserv.listen(HTTP_PORT);
  console.log(`Listening on http://localhost:${HTTP_PORT}...`);
}

async function handleRequest(req, res) {
  if (/\/get-article\b/.test(req.url)) {
    await delay(2000);

    const query = getQuery(req);
    const records = getArticle(+query.gallerySize);

    serveData(res, records);
  }
  if (/\/get-more-articles\b/.test(req.url)) {
    await delay(1000);

    const query = getQuery(req);
    const records = getMoreArticles(+query.number);

    serveData(res, records);
  }
}

function serveData(res, records) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Cache-Control": "max-age: 0, no-cache",
    "Access-Control-Allow-Origin": "http://localhost:8038"
  });
  res.end(JSON.stringify(records));
}

function getQuery(req) {
  const url_parts = url.parse(req.url, true);
  return url_parts.query;
}
