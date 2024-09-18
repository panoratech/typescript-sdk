# RagQueryOutput

## Example Usage

```typescript
import { RagQueryOutput } from "@panora/sdk/models/components";

let value: RagQueryOutput = {
  chunk: "\n"
    + "Date : 06/07/2023",
  metadata: {
    "blobType": "",
    "text": "ATTESTATION",
  },
  score: 0.87,
  embedding: [
    -0.00442447886,
    -0.00116857514,
    0.00869117491,
    -0.0361584462,
    -0.00220073434,
    0.00946036354,
    -0.0101112155,
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `chunk`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The chunk which matches the embed query                                                                        | <br/>Date : 06/07/2023                                                                                         |
| `metadata`                                                                                                     | Record<string, *any*>                                                                                          | :heavy_check_mark:                                                                                             | The metadata tied to the chunk                                                                                 | {<br/>"blobType": "",<br/>"text": "ATTESTATION"<br/>}                                                          |
| `score`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The score                                                                                                      | 0.87                                                                                                           |
| `embedding`                                                                                                    | *number*[]                                                                                                     | :heavy_check_mark:                                                                                             | The embedding of the relevant chunk                                                                            | [<br/>-0.00442447886,<br/>-0.00116857514,<br/>0.00869117491,<br/>-0.0361584462,<br/>-0.00220073434,<br/>0.00946036354,<br/>-0.0101112155<br/>] |