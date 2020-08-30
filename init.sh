delete_composition()
{
  rm pages/composition-api.vue
  sed -i.bak '/@nuxtjs\/composition-api/d' package.json
  sed -i.bak '/@nuxtjs\/composition-api/d' nuxt.config.ts
  sed -i.bak "s/'Composition API'//" pages/index.vue
}

delete_class()
{
  rm pages/class-api.vue
  sed -i.bak '/nuxt-property-decorator/d' package.json
  sed -i.bak "s/'Class API', //" pages/index.vue
}

delete_options()
{
  rm pages/options-api.vue
  sed -i.bak "s/'Options API', //" pages/index.vue
}

use_options()
{
  delete_composition
  delete_class
}

use_class()
{
  delete_composition
  delete_options
}

use_composition()
{
  delete_class
  delete_options
}

case $COMPONENT_API in
  options ) use_options;;
  class ) use_class;;
  compositon ) use_composition;;
  *)
    echo "Which component style do you prefer?"
    select choice in "Options API" "Class API" "Composition API"; do
      case $choice in
        'Options API' )     use_options; break;;
        'Class API' )       use_class; break;;
        'Composition API' ) use_composition; break;;
      esac
    done
    ;;
esac

rm -f package.json.bak nuxt.config.ts.bak pages/index.vue.bak init.sh

echo "Initialized with your choice!\n\nRun npm/yarn install, then commit all changes"
