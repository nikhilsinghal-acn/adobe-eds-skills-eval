export default function decorate(block) {
  const row = block.querySelector(':scope > div');
  if (!row) return;
  const cells = [...row.children];
  const pictureCell = cells.find((cell) => cell.querySelector('picture'));
  const textCell = cells.find((cell) => cell !== pictureCell);
  if (pictureCell) block.prepend(pictureCell.querySelector('picture'));
  if (textCell) {
    textCell.classList.add('hero-body');
  }
}
