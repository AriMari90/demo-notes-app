import * as sst from '@serverless-stack/resources';

export default class StorageStack extends sst.Stack {
    table;

    constructor(scope, id, props) {
        super(scope, id, props);

        this.table = new sst.Table(this, "Notes", {
            fields: {
                userId: sst.TableFieldType.STRING,
                noteId: sst.TableFieldType.STRING
            },
            primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
        });
    }
}


/*
create new stack in STT app. Use it for all storage related infrastructures (DynamoDB, S3)
STT's Table construct has 2 fields: userId and noteId.
Each DynamoDB table has a primary key: supports 2 kinds: Partition key, and composite of partition key and sort key. Cannot be changed once set.

*/