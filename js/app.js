angular.module("listaTelefonica", []).config( configApp )

function configApp( $httpProvider ) {
    // $httpProvider.defaults.withCredentials = true;
    // $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}