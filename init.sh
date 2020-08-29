delete_composition()
{
  sed -i.bak '/@nuxtjs\/composition-api/d' package.json
  sed -i.bak '/@nuxtjs\/composition-api/d' nuxt.config.ts
  sed -i.bak '/plugins\/composition-api/d' nuxt.config.ts
  sed -i.bak "s/'Composition API'//" pages/index.vue
}

delete_class()
{
  sed -i.bak '/nuxt-property-decorator/d' package.json
  sed -i.bak "s/'Class API', //" pages/index.vue
}

delete_options()
{
  sed -i.bak "s/'Options API', //" pages/index.vue
}

echo "Which component style do you prefer?"
select choice in "Options API" "Class API" "Composition API"; do
  case $choice in
    'Options API' )     rm pages/{class,composition}-api.vue; delete_composition; delete_class; break;;
    'Class API' )       rm pages/{options,composition}-api.vue; delete_composition; delete_options; break;;
    'Composition API' ) rm pages/{options,class}-api.vue; delete_class; delete_options; break;;
  esac
done

rm -f package.json.bak
rm -f nuxt.config.ts.bak
rm -f pages/index.vue.bak
rm init.sh

echo "Initialized with your choice!\n\nRun npm/yarn install, then commit all changes"
