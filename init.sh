delete_composition()
{
  sed -i.bak '/@nuxtjs\/composition-api/d' package.json
  rm package.json.bak
  sed -i.bak '/@nuxtjs\/composition-api/d' nuxt.config.ts
  sed -i.bak '/plugins\/composition-api/d' nuxt.config.ts
  rm nuxt.config.ts.bak
}

delete_class()
{
  sed -i.bak '/nuxt-property-decorator/d' package.json
  rm package.json.bak
}

echo "Which component style do you prefer?"
select choice in "Options API" "Class API" "Composition API"; do
  case $choice in
    'Options API' )     rm pages/{class,composition}-api.vue; delete_composition; delete_class; break;;
    'Class API' )       rm pages/{options,composition}-api.vue; delete_composition; break;;
    'Composition API' ) rm pages/{options,class}-api.vue; delete_class; break;;
  esac
done

echo "Initialized with your choice!\n\nRun npm/yarn install, then commit all changes"
