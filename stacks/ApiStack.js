import * as sst from '@serverless-stack/resources';

export default class ApiStack extends sst.Stack {
    api;

    constructor(scope, id, props) {
        super(scope, id, props)

        const {table} = props;

        this.api = new sst.Api(this, "Api", {
            defaultFunctionProps: {
                environment: {
                    TABLE_NAME: table.tableName
                },
            },
        routes: {
            "GET    /notes": "src/list.main",
            "POST   /notes": "src/create.main",
            "GET    /notes/{id}": "src/get.main",
            "PUT    /notes/{id}": "src/update.main",
        }
        });
    this.api.attachPermissions([table]);

    this.addOutputs({
        ApiEndpoint: this.api.url
    });
    }
}

// notId: c58e5540-274c-11ec-9d26-31a38cf352d0