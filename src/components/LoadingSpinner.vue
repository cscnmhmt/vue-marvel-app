<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<style>
.loading-spinner {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #888;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
