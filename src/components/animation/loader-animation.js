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
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 1) 2%
    );}
 3% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 2%,
      rgba(0, 0, 0, 1) 3%
    );}
 4% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 3%,
      rgba(0, 0, 0, 1) 4%
    );}
 5% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 4%,
      rgba(0, 0, 0, 1) 5%
    );}
 6% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 5%,
      rgba(0, 0, 0, 1) 6%
    );}
 7% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 6%,
      rgba(0, 0, 0, 1) 7%
    );}
 8% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 7%,
      rgba(0, 0, 0, 1) 8%
    );}
 9% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 1) 9%
    );}
 10% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 9%,
      rgba(0, 0, 0, 1) 10%
    );}
 11% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 1) 11%
    );}
 12% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 11%,
      rgba(0, 0, 0, 1) 12%
    );}
 13% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 12%,
      rgba(0, 0, 0, 1) 13%
    );}
 14% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 13%,
      rgba(0, 0, 0, 1) 14%
    );}
 15% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 14%,
      rgba(0, 0, 0, 1) 15%
    );}
 16% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 15%,
      rgba(0, 0, 0, 1) 16%
    );}
 17% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 16%,
      rgba(0, 0, 0, 1) 17%
    );}
 18% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 17%,
      rgba(0, 0, 0, 1) 18%
    );}
 19% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 18%,
      rgba(0, 0, 0, 1) 19%
    );}
 20% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 19%,
      rgba(0, 0, 0, 1) 20%
    );}
 21% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 1) 21%
    );}
 22% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 21%,
      rgba(0, 0, 0, 1) 22%
    );}
 23% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 22%,
      rgba(0, 0, 0, 1) 23%
    );}
 24% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 23%,
      rgba(0, 0, 0, 1) 24%
    );}
 25% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 24%,
      rgba(0, 0, 0, 1) 25%
    );}
 26% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 1) 26%
    );}
 27% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 26%,
      rgba(0, 0, 0, 1) 27%
    );}
 28% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 27%,
      rgba(0, 0, 0, 1) 28%
    );}
 29% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 28%,
      rgba(0, 0, 0, 1) 29%
    );}
 30% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 29%,
      rgba(0, 0, 0, 1) 30%
    );}
 31% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 1) 31%
    );}
 32% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 31%,
      rgba(0, 0, 0, 1) 32%
    );}
 33% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 32%,
      rgba(0, 0, 0, 1) 33%
    );}
 34% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 33%,
      rgba(0, 0, 0, 1) 34%
    );}
 35% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 34%,
      rgba(0, 0, 0, 1) 35%
    );}
 36% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 35%,
      rgba(0, 0, 0, 1) 36%
    );}
 37% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 36%,
      rgba(0, 0, 0, 1) 37%
    );}
 38% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 1) 38%
    );}
 39% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 38%,
      rgba(0, 0, 0, 1) 39%
    );}
 40% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 1) 40%
    );}
 41% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 1) 41%
    );}
 42% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 1) 42%
    );}
 43% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 42%,
      rgba(0, 0, 0, 1) 43%
    );}
 44% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 43%,
      rgba(0, 0, 0, 1) 44%
    );}
 45% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 44%,
      rgba(0, 0, 0, 1) 45%
    );}
 46% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 1) 46%
    );}
 47% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 46%,
      rgba(0, 0, 0, 1) 47%
    );}
 48% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 47%,
      rgba(0, 0, 0, 1) 48%
    );}
 49% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 1) 49%
    );}
 50% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 49%,
      rgba(0, 0, 0, 1) 50%
    );}
 51% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 1) 51%
    );}
 52% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 51%,
      rgba(0, 0, 0, 1) 52%
    );}
 53% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 52%,
      rgba(0, 0, 0, 1) 53%
    );}
 54% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 53%,
      rgba(0, 0, 0, 1) 54%
    );}
 55% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 54%,
      rgba(0, 0, 0, 1) 55%
    );}
 56% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 55%,
      rgba(0, 0, 0, 1) 56%
    );}
 57% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 56%,
      rgba(0, 0, 0, 1) 57%
    );}
 58% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 57%,
      rgba(0, 0, 0, 1) 58%
    );}
 59% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 58%,
      rgba(0, 0, 0, 1) 59%
    );}
 60% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 59%,
      rgba(0, 0, 0, 1) 60%
    );}
 61% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 1) 61%
    );}
 62% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 61%,
      rgba(0, 0, 0, 1) 62%
    );}
 63% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 62%,
      rgba(0, 0, 0, 1) 63%
    );}
 64% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 63%,
      rgba(0, 0, 0, 1) 64%
    );}
 65% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 64%,
      rgba(0, 0, 0, 1) 65%
    );}
 66% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 65%,
      rgba(0, 0, 0, 1) 66%
    );}
 67% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 66%,
      rgba(0, 0, 0, 1) 67%
    );}
 68% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 67%,
      rgba(0, 0, 0, 1) 68%
    );}
 69% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 68%,
      rgba(0, 0, 0, 1) 69%
    );}
 70% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 69%,
      rgba(0, 0, 0, 1) 70%
    );}
 71% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 1) 71%
    );}
 72% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 71%,
      rgba(0, 0, 0, 1) 72%
    );}
 73% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 72%,
      rgba(0, 0, 0, 1) 73%
    );}
 74% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 73%,
      rgba(0, 0, 0, 1) 74%
    );}
 75% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 74%,
      rgba(0, 0, 0, 1) 75%
    );}
 76% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 1) 76%
    );}
 77% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 76%,
      rgba(0, 0, 0, 1) 77%
    );}
 78% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 77%,
      rgba(0, 0, 0, 1) 78%
    );}
 79% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 78%,
      rgba(0, 0, 0, 1) 79%
    );}
 80% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 79%,
      rgba(0, 0, 0, 1) 80%
    );}
 81% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 81%
    );}
 82% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 81%,
      rgba(0, 0, 0, 1) 82%
    );}
 83% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 82%,
      rgba(0, 0, 0, 1) 83%
    );}
 84% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 83%,
      rgba(0, 0, 0, 1) 84%
    );}
 85% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 84%,
      rgba(0, 0, 0, 1) 85%
    );}
 86% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 85%,
      rgba(0, 0, 0, 1) 86%
    );}
 87% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 86%,
      rgba(0, 0, 0, 1) 87%
    );}
 88% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 87%,
      rgba(0, 0, 0, 1) 88%
    );}
 89% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 88%,
      rgba(0, 0, 0, 1) 89%
    );}
 90% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 89%,
      rgba(0, 0, 0, 1) 90%
    );}
 91% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 1) 91%
    );}
 92% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 91%,
      rgba(0, 0, 0, 1) 92%
    );}
 93% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 92%,
      rgba(0, 0, 0, 1) 93%
    );}
 94% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 93%,
      rgba(0, 0, 0, 1) 94%
    );}
 95% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 94%,
      rgba(0, 0, 0, 1) 95%
    );}
 96% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, 1) 96%
    );}
 97% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 96%,
      rgba(0, 0, 0, 1) 97%
    );}
 98% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 97%,
      rgba(0, 0, 0, 1) 98%
    );}
 99% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 98%,
      rgba(0, 0, 0, 1) 99%
    );}
  100% { mask-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 99%,
      rgba(0, 0, 0, 1) 100%
    ); }`;
