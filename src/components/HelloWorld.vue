<template>
  <div class="justify-center flex flex-col  w-full h-full">
    <div class="top-12 relative">
      <nav class="flex justify-center items-center">{{ msg }} <img alt="Vue logo" class="w-16 h-16 fill-current" src="../assets/logo.png" /></nav>
    </div>
    <div class="w-full max-w-3xl relative shadow-sm rounded-lg bg-slate-200 p-2 self-center top-14">
      <!-- select option -->
      <div class="w-full py-2">
        <Listbox v-model="selectedPerson">
          <div class="relative mt-1">
            <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left  bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-red-300 focus-visible:ring-offset-2 focus-visible:border-red-500 sm:text-sm ">
              <span class="block truncate text-bold">{{ selectedPerson.name }}</span>
              <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none h-9">
                <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="person in people" :key="person.name" :value="person" as="template">
                  <li :class="[
                  active ? 'text-red-700 bg-red-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]">
                    <span :class="[
                    selected ? 'font-semibold text-gray-600' : 'font-normal text-gray-500',
                    'block truncate',
                  ]">{{ person.name }}</span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-red-500">
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>

      <!-- checkbox options -->
      <div class="w-full py-2 relative shadow-sm bg-white rounded-lg">
        <div class="columns-2 gap-3 relative rounded-lg px-5">
          <div v-for="fruit, index of fruits" :key="fruit" class="py-2 ">
            <Switch @click="actualizar(fruit)" v-model="fruit.value" :class="fruits[index].value ? 'bg-red-700' : 'bg-gray-700'" class="relative inline-flex items-center h-6 rounded-full w-11 duration-200">
              <span class="sr-only">Enable notifications</span>
              <span :class="fruits[index].value ? 'translate-x-6' : 'translate-x-1'" class="inline-block w-4 h-4 transform duration-300  bg-white rounded-full" />
            </Switch>
            <span class="font-bold px-5 transform duration-200 inline-block" :class="fruits[index].value ? 'text-gray-500' : 'text-gray-300' ">{{fruit.name}}</span>
          </div>
        </div>
        <div class="py-2 text-clip px-4 bg-blue-50">
          {{fruits}}
        </div>
        <!-- https://tailwindcss.com/docs/justify-items -->
        <div class="grid grid-cols-4 gap-4 py-4 justify-items-center">
          <div class="w-24 h-12 inline-block text-white text-center rounded-lg" :class="fruits[index].value ? 'bg-red-500 ': 'bg-gray-600 '" v-for="fruit, index in fruits" :key="index">
            <span class="block">{{fruit.name}}</span>
            <span class="block"> {{fruit.value}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Switch } from '@headlessui/vue';
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid';

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
    Switch
  },
  watch: {
    selectedPerson(event) {
      console.table('evento ha cambiado', event);
      // .......
      console.info('---------------------------');
    }
  },

  props: {
    msg: String
  },
  setup() {
    const people = [{ name: 'Latin@' }, { name: 'Caribeñ@' }, { name: 'American@' }, { name: 'Aborigen' }, { name: 'Ameztiz@' }, { name: 'Pard@' }, { name: 'Penizular' }];
    const selectedPerson = ref(people[0]);

    const fruits = ref({
      Apple: {
        name: 'Manzanas',
        value: false
      },
      Orange: {
        name: 'Naranjas',
        value: false
      },
      Limon: {
        name: 'Limones',
        value: false
      },
      Platano: {
        name: 'Platanos',
        value: false
      },
      Berrys: {
        name: 'Fresas',
        value: false
      },
      Melon: {
        name: 'Melones',
        value: false
      },
      Peach: {
        name: 'Melocotones',
        value: false
      },
      Pineapple: {
        name: 'Piña',
        value: false
      }
    });
    function actualizar(que) {
      console.log(que);
    }
    return {
      people,
      selectedPerson,
      actualizar,
      fruits
    };
  }
};
</script>

<style>
</style>