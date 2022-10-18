import * as cdk from "@aws-cdk/core";
import {Pipeline} from "@aws-cdk/aws-codepipeline";
// import { Artifact, Pipeline } from "@aws-cdk/aws-codepipeline";
// import { GitHubSourceAction } from "@aws-cdk/aws-codepipeline-actions";
// import { SecretValue } from "@aws-cdk/core";

export class PipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new Pipeline(this, "", {});
  }
}