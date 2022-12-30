import { keyframes } from "styled-components";

export const WrapperAnimation = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, type: "linear" },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const loaderAnimation = keyframes`
 0% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 0%
    );}
 1% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 1%
    );}
 2% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 2%
    );}
 3% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 3%
    );}
 4% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 4%
    );}
 5% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%
    );}
 6% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 6%
    );}
 7% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 7%
    );}
 8% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 8%
    );}
 9% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 9%
    );}
 10% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 10%
    );}
 11% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 11%
    );}
 12% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 12%
    );}
 13% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 13%
    );}
 14% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 14%
    );}
 15% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 15%
    );}
 16% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 16%
    );}
 17% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 17%
    );}
 18% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 18%
    );}
 19% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 19%
    );}
 20% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 20%
    );}
 21% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 21%
    );}
 22% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 22%
    );}
 23% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 23%
    );}
 24% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 24%
    );}
 25% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 25%
    );}
 26% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 26%
    );}
 27% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 27%
    );}
 28% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 28%
    );}
 29% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 29%
    );}
 30% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 30%
    );}
 31% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 31%
    );}
 32% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 32%
    );}
 33% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 33%
    );}
 34% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 34%
    );}
 35% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 35%
    );}
 36% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 36%
    );}
 37% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 37%
    );}
 38% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 38%
    );}
 39% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 39%
    );}
 40% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 40%
    );}
 41% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 41%
    );}
 42% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 42%
    );}
 43% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 43%
    );}
 44% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 44%
    );}
 45% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 45%
    );}
 46% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 46%
    );}
 47% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 47%
    );}
 48% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 48%
    );}
 49% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 49%
    );}
 50% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 50%
    );}
 51% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 51%
    );}
 52% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 52%
    );}
 53% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 53%
    );}
 54% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 54%
    );}
 55% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 55%
    );}
 56% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 56%
    );}
 57% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 57%
    );}
 58% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 58%
    );}
 59% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 59%
    );}
 60% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 60%
    );}
 61% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 61%
    );}
 62% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 62%
    );}
 63% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 63%
    );}
 64% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 64%
    );}
 65% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 65%
    );}
 66% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 66%
    );}
 67% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 67%
    );}
 68% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 68%
    );}
 69% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 69%
    );}
 70% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 70%
    );}
 71% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 71%
    );}
 72% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 72%
    );}
 73% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 73%
    );}
 74% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 74%
    );}
 75% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 75%
    );}
 76% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 76%
    );}
 77% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 77%
    );}
 78% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 78%
    );}
 79% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 79%
    );}
 80% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 80%
    );}
 81% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 81%
    );}
 82% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 82%
    );}
 83% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 83%
    );}
 84% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 84%
    );}
 85% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 85%
    );}
 86% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 86%
    );}
 87% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 87%
    );}
 88% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 88%
    );}
 89% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 89%
    );}
 90% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 90%
    );}
 91% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 91%
    );}
 92% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 92%
    );}
 93% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 93%
    );}
 94% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 94%
    );}
 95% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 95%
    );}
 96% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 96%
    );}
 97% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 97%
    );}
 98% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 98%
    );}
 99% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 99%
    );}
  100% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ); }`;
