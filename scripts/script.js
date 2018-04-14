(function () {
    'use strict';

    angular.module('testApp', ['ngMaterial'])
        .controller('DemoCtrl', DemoCtrl);

    function DemoCtrl($filter, $timeout, $q, $mdDialog) {
        let self = this;

        self.filters = ["All", "Less Than $500", "From $500 to $1000", "From $1000 to $2000", "$2000 or more"];
        self.filterVal = "All";

        self.gravidaList = [
            {
                heading: "Cras ac mauris",
                subtext: "nteger dictum hendrerit pharetra. Cras fermentum posuere egestas."
            },
            {
                heading: "Curabitur elementum",
                subtext: "Cras vel imperdiet mauris. Pellentesque libero mauris, interdum a felis et, condimentum mattis erat."
            },
            {
                heading: "Awards and Recognitions",
                subtext: "Aliquam eget ligula mauris. Etiam viverra non turpis eu auctor. Nullam pretium est libero, et condimentum massa egestas id."
            },
            {
                heading: "Morbi placerat",
                subtext: "Nam feugiat ultrices ligula eget faucibus. Mauris convallis ipsum est."
            },
            {
                heading: "Suspendisse eu",
                subtext: "Duis pretium elementum dui, id feugiat neque facilisis vel."
            },
            {
                heading: "Integer faucibus",
                subtext: "Vivamus at rutrum est, eu pellentesque lacus. Curabitur imperdiet tortor sit amet enim ullamcorper, a aliquet odio rutrum."
            }
        ];

        self.products = [
            {
                id: "product1",
                title: "Product Title 1",
                price: 500,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                imgPath: "materials/images/cereal_b.jpg",
                fullText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " +
                "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. " +
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. " +
                "\n \n \n" +
                "In enim justo, rhoncus ut, imperdiet a, " +
                "venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus " +
                "elementum semper nisi. Aenean vulputate eleifend tellus."
            },
            {
                id: "product2",
                title: "Product Title 2",
                price: 1900,
                text: "Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.",
                imgPath: "materials/images/flower_b.jpg",
                fullText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " +
                "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. " +
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, " +
                "venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus " +
                "elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, " +
                "eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla " +
                "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur " +
                "ullamcorper ultricies nisi. Nam eget dui."
            },
            {
                id: "product3",
                title: "Product Title 3",
                price: 2730,
                text: "Cras non metus sed odio tristique imperdiet.",
                imgPath: "materials/images/machine_b.jpg",
                fullText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " +
                "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. " +
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, " +
                "venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus " +
                "elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, " +
                "eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla " +
                "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur " +
                "ullamcorper ultricies nisi. Nam eget dui."
            },
            {
                id: "product4",
                title: "Product Title 4",
                price: 731,
                text: "Pellentesque mattis tellus ut molestie dapibus.",
                imgPath: "materials/images/candy_b.jpg",
                fullText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " +
                "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. " +
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, " +
                "venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus " +
                "elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, " +
                "eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla " +
                "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur " +
                "ullamcorper ultricies nisi. Nam eget dui."
            }
        ];

        self.filteredProducts = self.products;
        self.prodSelected = false;
        self.selectedProduct = null;
        self.showIngreList = false;

        self.states = loadAll();
        self.selectedItem = null;
        self.searchText = null;

        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;

        self.onFilterChange = onFilterChange;
        self.closeProduct = closeProduct;
        self.productClicked = productClicked;

        self.translateNum = translateNum;
        self.translateOrig = translateOrig;

        function onFilterChange () {
            self.prodSelected = false;
            if (self.filterVal === "All") {
                self.filteredProducts = [];
                self.filteredProducts = self.products;
            } else if (self.filterVal === "Less Than $500") {
                self.filteredProducts = [];
                for (let i = 0; i < self.products.length; i++) {
                    if (self.products[i].price < 500) {
                        self.filteredProducts.push(self.products[i]);
                    }
                }
            } else if (self.filterVal === "From $500 to $1000") {
                self.filteredProducts = [];
                for (let i = 0; i < self.products.length; i++) {
                    if (self.products[i].price >= 500 && self.products[i].price < 1000) {
                        self.filteredProducts.push(self.products[i]);
                    }
                }
            } else if (self.filterVal === "From $1000 to $2000") {
                self.filteredProducts = [];
                for (let i = 0; i < self.products.length; i++) {
                    if (self.products[i].price >= 1000 && self.products[i].price < 2000) {
                        self.filteredProducts.push(self.products[i]);
                    }
                }
            } else if (self.filterVal === "$2000 or more") {
                self.filteredProducts = [];
                for (let i = 0; i < self.products.length; i++) {
                    if (self.products[i].price >= 2000) {
                        self.filteredProducts.push(self.products[i]);
                    }
                }
            }
        }

        function closeProduct () {
            self.prodSelected = false;
        }

        function productClicked (selectedId) {
            if(selectedId === "product1")
                self.showIngreList = true;
            else
                self.showIngreList = false;

            self.prodSelected = true;
            self.selectedProduct = $filter('filter')(self.products, {id: selectedId}, true)[0];
        }

        function selectedItemChange(item, ev) {
            if(item){
                $mdDialog.show({
                    controller: DialogController,
                    template:
                        '<div layout="column" layout-margin class="md-padding">' +
                        '<div layout="row">' +
                        '<h1 style="margin:0;"> {{state}} </h1><div flex></div>' +
                        '<span style="cursor:pointer;outline:none;color:#002b5a;font-style:italic;" ng-click="closeDialog()"> close ' +
                        '<img src="materials/images/close.png" ' +
                            'style="width:12px;height:12px;margin-left:5px;cursor:pointer;outline:none;" /></span></div>' +
                        '<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                            'aliquip ex ea commodo consequat.</p></div>' +
                        '</div>',
                    targetEvent: ev,
                    clickOutsideToClose:true
                });
            }

            function DialogController ($scope, $mdDialog) {
                $scope.state = item.display;
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }

        function querySearch(query) {
            let results = query ? self.states.filter(createFilterFor(query)) : self.states;
            let deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        }

        function loadAll() {
            let allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        function createFilterFor(query) {
            let lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        function translateNum(className) {
            let ele = document.getElementsByClassName(className);
            for(let i=0; i<ele.length; i++){
                ele[i].style.transform = "scale(1.5)";
            }
        }

        function translateOrig(className) {
            let ele = document.getElementsByClassName(className);
            for(let i=0; i<ele.length; i++){
                ele[i].style.transform = "scale(1)";
            }
        }
    }
})();