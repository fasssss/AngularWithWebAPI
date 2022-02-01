import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from "angular-in-memory-web-api";
import {Hero} from "../models/hero";

export const collection = [
  {
    name: "string",
    heroPoints: 1000,
    age: 22,
    height: 2,
    superPowers: "characters",
    superVillain: "array",
  },
  {
    name: "piligrim",
    heroPoints: 1000,
    age: 22,
    height: 2,
    superPowers: "tent",
    superVillain: "bears",
  },
  {
    name: "fear",
    heroPoints: 10000,
    age: 22,
    height: 2,
    superPowers: "they run",
    superVillain: "bless",
  },
];

export class InMemoryDataService implements InMemoryDbService{
  post(requestInfo: RequestInfo){
    const data = requestInfo.utils.getJsonBody(requestInfo.req);
    console.log(data);
    if(collection.filter(item => item.name === data.name) !== []){
      console.log(1);
    collection.push(data);
    const options: ResponseOptions = {
      body: { data  },
      status: STATUS.OK,
      headers: requestInfo.headers,
      url: requestInfo.url
    };

    return requestInfo.utils.createResponse$(() => options);
    }
    return null;
  }

  patch(requestInfo: RequestInfo){
    const data = requestInfo.utils.getJsonBody(requestInfo.req);
    const index = collection.findIndex(item => item.name === data.name);
    console.log(data);
    if(index !== -1){
      collection[index] = data;
      console.log("changed: ", collection[index]);
      const options: ResponseOptions = {
        body: { data  },
        status: STATUS.OK,
        headers: requestInfo.headers,
        url: requestInfo.url
      };

      return requestInfo.utils.createResponse$(() => options);
    }
    return null;
  }

  delete(requestInfo: RequestInfo){
    const data = requestInfo.id;
    const index = collection.findIndex(item => item.name === data);
    if(index !== -1){
      const removed = collection[index];
      collection.splice(index, 1);

      const options: ResponseOptions = {
        body: { removed },
        status: STATUS.OK,
        headers: requestInfo.headers,
        url: requestInfo.url
      };

      return requestInfo.utils.createResponse$(() => options);
    }
    return null;
  }

  createDb(): {Hero: Hero[]}
  {
    return{
      Hero : collection
    }
  }

}
