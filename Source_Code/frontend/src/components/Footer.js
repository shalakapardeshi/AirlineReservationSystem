const Footer = (props) => {
  return (
    <div>
      <footer class="footer mt-auto  bg-light">
        <div class="container1" Style="text-align: center; background-color: #97d9e9;">
          <span class="text-muted">AirLineReservationSystem©2021 All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
};

Footer.defaultProps = {
  title: " ",
};

export default Footer;