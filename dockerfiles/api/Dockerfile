FROM node:10
WORKDIR /youtinerary

# ensure yarn.lock is evaluated by cache diff
COPY package.json yarn.lock ./

# Copy only pkg.json
COPY packages/api/package.json packages/api/
COPY packages/typescript/package.json packages/typescript/

RUN yarn install --frozen-lockfile && yarn cache clean

# Copy the rest
COPY packages/api packages/api/
COPY packages/typescript packages/typescript/

# Build
RUN yarn api:build

WORKDIR /youtinerary/packages/api
CMD ["node", "dist/index.js"]
