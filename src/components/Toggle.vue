<template>
    <div>
        <input class="tgl tgl-light" :checked="toggle" id="toggle" type="checkbox"/>
        <label class="tgl-btn" for="toggle"></label>
    </div>
</template>

<script>
export default {
  props: ["toggle"]
};
</script>

<style lang="scss" scoped>
.tgl {
  display: none;

  &,
  &:after,
  &:before,
  & *,
  & *:after,
  & *:before,
  & + .tgl-btn {
    box-sizing: border-box;
    &::selection {
      background: none;
    }
  }

  + .tgl-btn {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;
    &:after,
    &:before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }

    &:after {
      left: 0;
    }

    &:before {
      display: none;
    }
  }

  &:checked + .tgl-btn:after {
    left: 50%;
  }
}

// themes
.tgl-light {
  + .tgl-btn {
    background: #f0f0f0;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
    &:after {
      border-radius: 50%;
      background: #fff;
      transition: all 0.2s ease;
    }
  }

  &:checked + .tgl-btn {
    background: #44c967;
  }
}
</style>