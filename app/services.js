'use strict';

//importo i service inserendo il percorso del file
import jsonplaceholderService from "/service/jsonplaceholder.service.js";

angular.module("myApp.services", []).service("jsonplaceholderService", jsonplaceholderService)