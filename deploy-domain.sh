#!/bin/bash
# Script to build, deploy, and map the custom domain using Google Cloud Run

PROJECT_ID="cool-impact-mrtgb"
SERVICE_NAME="creatorstoolkit"
REGION="us-central1"
DOMAIN="creatorstoolkit.online"

echo "Deploying the Express + Vite full-stack application to Cloud Run in region $REGION..."

# 1. Deploy the service to Google Cloud Run using the source code directly
# Google Cloud Build will automatically use the Buildpacks or Dockerfile to build Node 
gcloud run deploy $SERVICE_NAME \
  --source . \
  --region $REGION \
  --project $PROJECT_ID \
  --allow-unauthenticated

echo "App deployed. Mapping custom domain: $DOMAIN ..."

# 2. Map the domain to the newly deployed Cloud Run service
gcloud beta run domain-mappings create \
  --service $SERVICE_NAME \
  --domain $DOMAIN \
  --region $REGION \
  --project $PROJECT_ID

echo "--------------------------------------------------------"
echo "Deployment and Domain Mapping complete!"
echo "NOTE: To finalize the process, open the Google Cloud Console:"
echo "1. Go to Cloud Run -> Manage Custom Domains"
echo "2. Find '$DOMAIN'"
echo "3. Copy the DNS records (A/AAAA or CNAME) and add them to your domain registrar."
echo "--------------------------------------------------------"
