<template>
  <div>
    <span>拖拽列表  异常页面</span>
    <Container @drop="onDrop">
      <Draggable v-for="(item, i) in items" :key="item.id">
        <div>
          {{i + 1}} -> {{item.data}}
        </div>
      </Draggable>
    </Container>

    <micro-app
      style="width:700px;height:1000px"
      name='app1'
      url='https://kutlugsahin.github.io/vue-smooth-dnd/#/cards' baseroute='/channel-list'
    ></micro-app>
  </div>
</template>

<script>
  import { Container, Draggable } from 'vue-smooth-dnd';

  export default {
    name: 'app',
    components: {
      Container,
      Draggable,
    },
    data() {
      return {
        items: [
          {
            id: 1,
            data: 'Princess Mononoke',
          },
          {
            id: 2,
            data: 'Spirited Away',
          },
          {
            id: 3,
            data: 'My Neighbor Totoro',
          },
          {
            id: 4,
            data: 'Howl\'s Moving Castle',
          },
        ],
      };
    },
    methods: {
      onDrop(dropResult) {
        this.items = this.applyDrag(this.items, dropResult);
      },
      applyDrag(arr, dragResult) {
        const { removedIndex, addedIndex, payload } = dragResult;

        if (removedIndex === null && addedIndex === null) return arr;
        const result = [...arr];
        let itemToAdd = payload;

        if (removedIndex !== null) {
          itemToAdd = result.splice(removedIndex, 1)[0];
        }
        if (addedIndex !== null) {
          result.splice(addedIndex, 0, itemToAdd);
        }
        return result;
      },
    },
  };
</script>
