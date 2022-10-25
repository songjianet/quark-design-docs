build-dev:
	export IS_BUILD=1; \
	export VUE_APP_ENV=dev; \
	npm run build; \

build-fat:
	export IS_BUILD=1; \
	export VUE_APP_ENV=fat; \
	npm run build; \

build-uat:
	export IS_BUILD=1; \
	export VUE_APP_ENV=uat; \
	npm run build; \

build-pre:
	export IS_BUILD=1; \
	export VUE_APP_ENV=pre; \
	npm run build; \

build-pro:
	export IS_BUILD=1; \
	export VUE_APP_ENV=pro; \
	npm run build; \

dev:
	npm run start; \
