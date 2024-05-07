FROM node:20-alpine

WORKDIR /app/lifeplan

COPY . .

RUN npm install -g pnpm@9
RUN pnpm install
RUN pnpm run build
RUN mv ./dist/lifeplan/* /app

WORKDIR /app

RUN rm -rf ./lifeplan

EXPOSE 4000

CMD [ "node", "./server/server.mjs" ]

# Build: docker build -t lifeplan-image .
# Run: docker run -p 8080:4000 --name lifeplan lifeplan-image
# Start: docker start lifeplan
# Open your browser in localhost:8080
